"use client";
import { useOrganization, useOrganizationList } from '@clerk/nextjs';
import React from 'react'
import Item from './Item';

const OrgList = () => {
        const { userMemberships } = useOrganizationList({
                userMemberships : {
                        infinite : true
                }
        }) as any
        if(!userMemberships.data?.length) return null
    return (
        <ul className='space-y-4'>
            {userMemberships.data &&  userMemberships.data.map((mem : any) => {
                return (
                <Item 
                key={mem.organization.id}
                id={mem.organization.id}
                name={mem.organization.name}
                imageUrl={mem.organization.imageUrl}
                />
            )})}
        </ul>
    )
}

export default OrgList