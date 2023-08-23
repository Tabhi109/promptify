import Footer from "@/components/promptify-footer";
import Header from "@/components/promptify-header";
import UserAuthenticationForm from "@/components/user-authentication-form";


export default function Home () {
  return (
  <div className="flex flex-col">
      <div>
    <Header/>
    </div>
<div className="mt-10 mb-36">
  <UserAuthenticationForm/>
</div>
    <div>
    <Footer/>
    </div>
  </div>
  );
}