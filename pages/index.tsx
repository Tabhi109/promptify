import Footer from "@/components/promptify-footer";
import Header from "@/components/promptify-header";
import UserProfileForm, { UserProfileData } from "@/components/user-profile-form";

export default function Home () {
  return  <div className="flex flex-col">
    <Header/>
    <UserProfileForm onSubmit={function (userData: UserProfileData): void {
      throw new Error("Function not implemented.");
    } }/>
    <Footer/>
  </div>
}