import './DocumentTable.css'
import download from './../../assets/save2.png'
import edit from '../../assets/pencil.png'

export default function DocumentTable({data}) {
  return (
    <div className="table-responsive mt-3">
      <table className="table table-borderless">
        <thead>
          <tr>
            <th>Name</th>
            <th>Tags</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.tags}</td>
              <td>{item.date}</td>
              <td>
                <div className="d-flex gap-3">
                  <button className='download-btn'>
                    <img src={download} alt="" />
                  </button>
                  <button className='edit-btn'>
                    <img src={edit} alt="" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}