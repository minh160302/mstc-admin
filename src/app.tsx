import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import "assets/css/material-dashboard-pro-react.css";

import AppRoutes from "./app-routers"
import { connect } from 'react-redux';
import { verifyJwtToken } from "./store/actions/authentication"
import Loading from "./components/Loading/Loading"
import { IRootState } from 'store/reducers';

interface StateProps {
  isAuthenticated: boolean;
}

interface DispatchProps {
  verifyJwtToken
}

interface AppProps { }

type Props = AppProps & StateProps & DispatchProps;

const App: React.FC<Props> = (props) => {
  const [fetchSession, setFetchSesson] = useState(false)

  useEffect(() => {
    try {
      props.verifyJwtToken()
    } catch (error) {
      console.log(error)
    } finally {
      setFetchSesson(true)
    }
  }, [])




  return (
    // <>
    //   {props.isAuthenticated ?
    //     <>
    //       <BrowserRouter>
    //         <AppRoutes />
    //       </BrowserRouter>
    //     </>
    //     :
    //     <>
    //       <Loading />
    //     </>
    //   }
    // </>
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );

}

const mapStateToProps = ({ authentication }: IRootState) => {
  return {
    isAuthenticated: authentication.isAuthenticated
  }
}

const mapDispatchToProps = {
  verifyJwtToken
}

export default connect(mapStateToProps, mapDispatchToProps)(App);