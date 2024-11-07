import React, { lazy } from "react";
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import { useURL } from "../src/hooks/useURL";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { DataProvider } from "./hooks/DataContext";

import IndexLayout from '../src/pages';

const Home = lazy(() => import("../src/pages/Home"));
const Regions = lazy(() => import("../src/pages/Regions"));
const Areas = lazy(() => import("../src/pages/Areas"));
const Result = lazy(() => import("../src/pages/Result"));
const Tariffs = lazy(() => import("../src/pages/Tariffs"));
const Detail = lazy(() => import("../src/pages/Detail"));
const Contacts = lazy(() => import("../src/pages/Contacts"))

const UserAgreement = lazy(() => import("../src/pages/LegalAspect/UserAgreement"));
const PrivacyPolicy = lazy(() => import("../src/pages/LegalAspect/PrivacyPolicy"));
// blog
const BlogLayout = lazy(() => import("../src/pages/Blog"));
const BlogList = lazy(() => import("../src/pages/Blog/BlogList"));
const Author = lazy(() => import("../src/pages/Blog/Author"));
const Article = lazy(() => import("../src/pages/Blog/Article"));

// cabinet
const CabinetLayout = lazy(() => import("../src/pages/Cabinet"));
const Profile = lazy(() => import("../src/pages/Cabinet/Profile"));
const Favorites = lazy(() => import("../src/pages/Cabinet/Favorites"));
const Subscribes = lazy(() => import("../src/pages/Cabinet/Subscribes"));
const MailingHistory = lazy(() => import("../src/pages/Cabinet/MailingHistory"));
const Tracking = lazy(() => import("../src/pages/Cabinet/Tracking"));
const FoldersList = lazy(() => import("../src/pages/Cabinet/Folders/FoldersList"));
const FoldersDetail = lazy(() => import("../src/pages/Cabinet/Folders/FoldersDetail"));

const NotFound404 = lazy(() => import("../src/components/NotFound404"));

import Header from "./components/Header";
import Footer from "./components/Footer";

const Root = () => {
  const url = useURL();

  return (
    <DataProvider>
      <Header />
      <Routes>
        <Route path="/" element={<IndexLayout/>}>
          <Route index element={<Home />} />
          <Route path="account/reset-password/:uuid/:token" element={<Home />} />
          <Route path={url.Regions.path} element={<Regions />} />
          <Route path={url.Areas.path} element={<Areas />} />
          <Route path={url.Result.path} element={<Result />} />
          <Route path={url.Tariffs.path} element={<Tariffs />} />
          <Route path={url.Detail.path} element={<Detail/>}/>
          <Route path={url.PrivacyPolicy.path} element={<PrivacyPolicy/>}/>
          <Route path={url.UserAgreement.path} element={<UserAgreement/>}/>
          <Route path={url.Contacts.path} element={<Contacts/>}/>
          <Route path="*" element={<NotFound404/>}/>

          <Route path="/blog" element={<BlogLayout/>}>
            <Route index element={<BlogList />} />
            <Route path={url.Author.path} element={<Author />} />
            <Route path={url.Article.path} element={<Article/>} />
          </Route>

          <Route path="/cabinet" element={<CabinetLayout />}>
            <Route path={url.Profile.path} element={<Profile />} />
            <Route path={url.Favorites.path} element={<Favorites />} />
            <Route path={url.Subscribes.path} element={<Subscribes />} />
            <Route path={url.FoldersList.path} element={<FoldersList />} />
            <Route path={url.FoldersDetail.path} element={<FoldersDetail />} />
            <Route path={url.MailingHistory.path} element={<MailingHistory/>} />
            <Route path={url.Tracking.path} element={<Tracking/>} />
          </Route>
          </Route>     
      </Routes>
    <Footer/>
    </DataProvider>
    
  );
};

// Конфигурация роутера
const router = createBrowserRouter([
  {
    path: "*",
    element: <Root />,
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-center"
        autoClose={2000} 
        limit={1} 
        draggable={false}
      />
    </div>
  );
};

export default App;
