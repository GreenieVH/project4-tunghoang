import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Fragment } from "react";
import { adminRoutes, publicRoutes } from "./Routes";
import DefaultLayout from "./Component/Layout/DefaultLayout";
import AdminLayout from "./Component/Layout/AdminLayout";
import Styles from "./Component/Styles";
import ProtectedRoute from "./Context/ProtectedRoute";
import AuthRoute from "./Context/AuthRoute";
import { UserProvider } from "./Context/userContext"; 


function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Styles>
          <div className="App">
            <Routes>
              {publicRoutes.map((route, index) => {
                const Page = route.component;
  
                let Layout = DefaultLayout;
  
                if (route.layout) {
                  Layout = route.layout;
                } else if (route.layout === null) {
                  Layout = Fragment;
                }
                if (route.path === '/cart') {
                  return (
                    <Route
                      key={index}
                      path={route.path}
                      element={
                        <AuthRoute
                          element={Page}
                          layout={Layout}
                        />
                      }
                    />
                  );
                }
                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={
                      <Layout>
                        <Page />
                      </Layout>
                    }
                  >
                    {route.children &&
                      route.children.map((childRoute, childIndex) => {
                        const ChildPage = childRoute.component;
                        return (
                          <Route
                            key={childIndex}
                            path={childRoute.path}
                            element={<ChildPage />}
                          />
                        );
                      })}
                  </Route>
                );
              })}
              {adminRoutes.map((route, index) => {
                const Page = route.component;
                let Layout = AdminLayout;
  
                if (route.layout) {
                  Layout = route.layout;
                } else if (route.layout === null) {
                  Layout = Fragment;
                }
  
                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={<ProtectedRoute element={Page} layout={Layout} />}
                  >
                    {route.children &&
                      route.children.map((childRoute, childIndex) => {
                        const ChildPage = childRoute.component;
                        return (
                          <Route
                            key={childIndex}
                            path={childRoute.path}
                            element={
                              <ProtectedRoute
                                element={ChildPage}
                                layout={Layout}
                              />
                            }
                          />
                        );
                      })}
                  </Route>
                );
              })}
  
            </Routes>
          </div>
        </Styles>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
