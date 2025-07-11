import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Intro from './pages/Intro/Intro'
import Dashboard from './pages/Dashboard';
import SelectType from './pages/Upload/SelectType'
import FileUploader from './pages/Upload/FileUploader';
import Result from './pages/Upload/Result';
import MyDocuments from  './pages/Document/MyDocuments'
import DocumentsView from './pages/Document/DocumentsView';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Intro />} />

        <Route element={<MainLayout />}>
          <Route path="/home" element={<Dashboard />} />
          <Route path="/upload" element={<SelectType />} />
          <Route path="/upload/:docType" element={<FileUploader />} />
          <Route path="/upload/result" element={<Result />} />
          <Route path="/documents" element={<MyDocuments />} />
          <Route path='/documents/:doctype' element={<DocumentsView />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}
