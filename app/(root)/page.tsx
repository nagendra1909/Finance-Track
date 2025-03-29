import HeaderBox from '@/components/Headerbox';
import Headerbox from '@/components/Headerbox'
import React from 'react'

const Home = () => {
    const loggedIn = {
        firstName : 'Nagendra'
    };
  return (
    <section className="home">
        <div className="home-content">
            <header className="home-header"> 
                <HeaderBox
                type="greeting"
                title="Welcome"
                user={loggedIn?.firstName ||"Guest"}
                subtext="Access and Manage your banking needs with Horizon efficiently."
                />
            </header>
        </div>
    </section>
  )
}

export default Home
