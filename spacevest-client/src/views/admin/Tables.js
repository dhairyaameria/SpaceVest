import React,{useState} from "react";
import Sidebar from "components/Navbars/Sidebar.js";
// components
import axios from "axios";
import FilterHeader, { AvatarCell, SelectColumnFilter, StatusPill }  from "components/Headers/FilterHeader"

const getData = () => {
  const data = [
    {
      name: 'Jane Cooper',
      email: 'jane.cooper@example.com',
      title: 'Regional Paradigm Technician',
      department: 'Optimization',
      status: 'Active',
      role: 'Admin',
      age: 27,
      imgUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
  ]
  return [...data]
}

export default function Tables() {
  
  const columns = React.useMemo(() => [
    {
      Header: "Name",
      accessor: 'name',
      emailAccessor: "email",
    },
    {
      Header: "Title",
      accessor: 'title',
    },
    {
      Header: "Status",
      accessor: 'status',
      Cell: StatusPill,
    },
    {
      Header: "Age",
      accessor: 'age',
    },
    {
      Header: "ESG",
      accessor: 'esg',
      Filter: SelectColumnFilter,  // new
      filter: 'includes',
    },
  ], [])

  const data = React.useMemo(() => getData(), [])

  const [values, setValues] = useState({
    sustain: "",
  });


  const [loading, setLoading] = useState(false);
  const [results, viewResult] = useState(
    [])
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values.name);
    axios.get(`http://export.arxiv.org/api/query?search_query=all:${values.name}&start=0&max_results=5`)
      .then(function (response) {
        console.log(response.data); 
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {

        console.log("json creation")

      });
  }

  return (
    <>
    
      <div className="flex flex-wrap justify-content-space-around mt-4">
         <div className="w-4/12 mb-12 px-4">
         <Sidebar />
         </div>
        
        <div className="w-8/12 px-4 xl:w-full mb-12 xl:mb-0">
          <FilterHeader columns={columns} data={data} />
        </div>
      </div>
    </>
  );
}
