import { Admin, Resource } from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import BookList from "./pages/books/book-list";
import Authors from "./pages/authors/authors";
import BookDetails from "./pages/books/show-book";
import EditBook from "./pages/books/edit-book";
import CreateBook from "./pages/books/create-book";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import PersonIcon from "@mui/icons-material/Person";
import Home from "./pages/home";

export const App = () => (
  <Admin
    layout={Layout}
    dataProvider={dataProvider}
    title="Books Management System"
    dashboard={Home}
  >
    <Resource
      name="books"
      list={BookList}
      show={BookDetails}
      edit={EditBook}
      create={CreateBook}
      icon={LibraryBooksIcon}
      options={{ label: "Books" }}
    />
    <Resource
      name="authors"
      list={Authors}
      icon={PersonIcon}
      options={{ label: "Authors" }}
    />
  </Admin>
);
