import React from 'react'
import App from 'next/app'
import UserContextProvider from '../contexts/userContext';
import '../styles/tailwind.css'
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
        <UserContextProvider>
            <Component {...pageProps} />
        </UserContextProvider>
    )
  }
}

export default MyApp
