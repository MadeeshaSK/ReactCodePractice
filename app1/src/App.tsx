import SayHi from "./view/SayHi"
import CustomerView from "./view/CustomerView"

function App() {
  let customers: {
    salary: number | undefined;
    address: string; name: string; 
}[]=[];

  return (
    // we can use like this 
    /* 
    <div></div>
    */
    // but we can not use like this as two root elements are not allowed
    /* 
    <div></div>
    <div></div>
    so we use fragment
    <>
      <div></div>
      <div></div>
    </>  
    */
    <div>
      <h1>Hello this is from App Component</h1>
      {/* // we can use components like this */}
      <SayHi /> 
      <h1>Customers</h1>
      <CustomerView name={customers[0].name} 
                    address={customers[0].address}
                    salary={customers[0].salary}
                    status={true}
       />
      <CustomerView name={customers[1].name} 
                    address={customers[1].address}
                    salary={customers[1].salary}
       />
      <CustomerView name={customers[2].name} 
                    address={customers[2].address}
                    salary={customers[2].salary}
       />
      <CustomerView name={customers[3].name} 
                    address={customers[3].address}
                    salary={customers[3].salary}
       />
      <CustomerView name={customers[4].name} 
                    address={customers[4].address}
                    salary={customers[4].salary}
       />
    </div>
  )
}

export default App
