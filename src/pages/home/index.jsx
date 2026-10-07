import { Button } from '../../components/ui/button'

import React from 'react'
import Card from './com/Card';
import DefaultLayout from '../../layout/DefaultLayout'


function Home() {
 

  return (
    <DefaultLayout>
      
      Home Page
      <Card />
      <Button>submit here

      </Button>
    </DefaultLayout>
  )
}

export default Home