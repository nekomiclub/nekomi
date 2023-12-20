'use client'

import React, { useState, useEffect } from 'react'
import { NextPage, Metadata } from 'next';

async function sth() {
  return 'some data'
}

const Auth: NextPage = (props) => {
  const [data, setData] = useState<string>()

  useEffect(() => {
    (async function () {
      setData(await sth())
    })()
  }, [])

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <div className="page">
      auth
    </div>
  );
}

export default Auth;