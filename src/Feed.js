import React from 'react'
import "./Feed.css"
import CreateIcon from "@material-ui/icons/Create"
import InputOption from './InputOption'
import ImageIcon from "@material-ui/icons/Image"
import SubscriptionsIcon from "@material-ui/icons/Subscriptions"
import EventNoteIcon from "@material-ui/icons/EventNote"
import CalendaViewDayIcon from "@material-ui/icons/CalendarViewDay"
import Post from './Post'

function Feed() {
    return (
        <div>
           <div className = "feed__inputContainer">
               <div className="feed__input">
                   <CreateIcon />
                   <form>
                        <input type="text" />
                        <button type = "submit">Send</button>
                   </form>
               </div>

               <div className = "feed__inputOptions">
               <InputOption Icon = {ImageIcon} title ="Photo" color="#990000"  />
               <InputOption Icon = {SubscriptionsIcon} title ="Video" color="#990000"  />
               <InputOption Icon = {EventNoteIcon} title ="Event" color="#990000"  />
               <InputOption Icon = {CalendaViewDayIcon} title ="Write Article" color="#990000"  />
               </div>
           </div>
           <Post name= "Beany Baby" description= "Founder at your moma's place" message= 
           "your mom is still angry with me for rubbing pepper on her butt plug" 
           photoUrl="/images/bean.jpeg" avatar="/images/beany.jpg"/>
           
        </div>
    )
}

export default Feed
