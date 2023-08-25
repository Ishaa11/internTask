import React from 'react';
import UserBasicInfo from '../components/profiledata/UserBasicInfo';
import CompanyDetails from '../components/profiledata/CompanyDetails';
import Creditcard from '../components/profiledata/Creditcard';
import Orders from '../components/profiledata/Orders';

const Profile = () => {
  return (
    <div className="App">
      <UserBasicInfo/>
      <CompanyDetails/>
      <Creditcard/>
      <Orders/>
    </div>
    // // <div className="ui container">
    // //   <div className="ui grid">
    // //     <div className="eight wide column">
    // //       <div className="ui raised segment">
    // //         <UserBasicInfo />
    // //       </div>
    // //     </div>
    // //     {/* <div className="eight wide column">
    // //       <div className="ui raised segment">
    // //         <Creditcard />
    // //       </div>
    // //     </div>
    // //     <div className="eight wide column">
    // //       <div className="ui raised segment">
    // //         <CompanyDetails />
    // //       </div>
    // //     </div>
    // //     <div className="eight wide column">
    // //       <div className="ui raised segment">
    // //         <Orders />
    // //       </div>
    // //     </div> */}
    //   </div>
    // </div>
  )
}

export default Profile;
