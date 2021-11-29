import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as HiIcons from 'react-icons/hi'
import * as GiIcons from 'react-icons/gi'

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Appointments',
        path: '/appointments',
        icon: <AiIcons.AiFillCalendar />,
        cName: 'nav-text'
    },
    {
        title: 'My Styles',
        path: '/',
        icon: <GiIcons.GiHairStrands/>,
        cName: 'nav-text'
    },
    {
        title: 'Logout',
        path: '/',
        icon: <HiIcons.HiLogout/>,
        cName: 'nav-text'
    },

]
