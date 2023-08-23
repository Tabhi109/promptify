import React from 'react'
import Footer from "@/components/promptify-footer";
import Header from "@/components/promptify-header";
import UserProfileForm, { UserProfileData } from "@/components/user-profile-form";

const UserProfileCreation = () => {
  return (
    <div className="flex flex-col">
      <div>
    <Header/>
    </div>
    <div className='mb-5 mt-5'>
    <UserProfileForm onSubmit={function (userData: UserProfileData): void {
      throw new Error("Function not implemented.");
    } }/>
    </div>
    <div>
    <Footer/>
    </div>
  </div>
  )
}

export default UserProfileCreation
