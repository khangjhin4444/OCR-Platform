import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import SelectType from '../pages/Upload/SelectType';
import FileUploader from '../pages/Upload/FileUploader';
import Result from '../pages/Upload/Result'
import MyDocuments from '../pages/Document/MyDocuments';
import Intro from '../pages/Intro/Intro'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Intro />}></Route>
      <Route path="/home" element={<Dashboard />} />
      <Route path="/upload" element={<SelectType />} />
      <Route path='/upload/:docType' element={<FileUploader />}></Route>
      <Route path='/upload/result' element={<Result />}></Route>
      <Route path="/upload"></Route>
      <Route path="/documents" element={<MyDocuments />} />
    </Routes>
  );
}
