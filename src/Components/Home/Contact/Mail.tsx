import { useState } from 'react'

import {
  Box,
  IconButton,  
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverCloseButton,
  Link,
  PopoverBody
} from '@chakra-ui/react'

import {FaEnvelope} from 'react-icons/fa'

const email : string = "vsxq\x86=B=BLsymux:o{y" // avoid simple data crawlers

const Mail = () => {
  const [showMail, setShowMail] = useState(false)

  const decodeMail = (dmail : string) => {
    if (!showMail) return
    var mail = ""
    for (let c of dmail) {
      mail += String.fromCharCode(c.charCodeAt(0)-12)
    }
    return mail
  }

  return (<>

  <Popover
    onOpen={() => {setShowMail(true)}}
    onClose={() => {setShowMail(false)}}
  >
    <PopoverTrigger><Box>
      <IconButton
        variant=""
        aria-label="e-mail icon"
        fontSize="30px"
        icon={<FaEnvelope />}
      />
      <Link><b> Email</b></Link></Box>
    </PopoverTrigger>
    <PopoverContent>
      <PopoverCloseButton/>
      <PopoverHeader>
        Email
      </PopoverHeader>
      <PopoverBody>
        <b>{decodeMail(email)}</b><br/>
        <Link href={"mailto:" + decodeMail(email)} isExternal>
          Send mail.
        </Link>      
      </PopoverBody>
    </PopoverContent>
  </Popover>

  </>)  
}
export default Mail;