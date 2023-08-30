import React from 'react'
import Footer from "@/components/promptify-footer";
import Header from "@/components/promptify-header";
import NewsFeed from '@/components/news-feed';

const UserProfileCreation = () => {
  return (
    <div className="flex flex-col">
      <div>
    <Header/>
    </div>
    <div className='mb-5 mt-5'>
        <NewsFeed/>
    </div>
    <div>
    <Footer/>
    </div>
  </div>
  )
}

export default UserProfileCreation
