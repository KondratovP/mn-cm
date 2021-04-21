import { Center } from '@chakra-ui/layout'
import { Tab, TabList, Tabs } from '@chakra-ui/tabs'
import React from 'react'

interface INavigationProps {
  [k: string]: any
};

const Navigation: React.FC<INavigationProps> = ({ children }) => {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>
      </Tabs>
      <Center>
        {children}
      </Center>
    </div>
  )
}

export default Navigation
