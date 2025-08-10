import HeaderLayout from '@components/layout/headerLayout'
import FooterLayout from '@components/layout/footerLayout'
import FBMessengerButton from '@components/layout/fbMessengerButton'

export default function Layout({ children }) {

  return (
    <>
      <HeaderLayout />
      {children}
      <FooterLayout />
      <FBMessengerButton />
    </>
  )
}
