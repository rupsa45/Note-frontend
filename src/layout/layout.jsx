import Header from "../components/Header";
import PropTypes from 'prop-types';

export default function Layout({children}) {
  return (
    <div className="flex flex-col min-h-screen">
        <Header/>
        <div className='container mx-auto flex-1 py-10'>{children}</div>
    </div>
  )
}
Layout.propTypes={
    children: PropTypes.node 
}