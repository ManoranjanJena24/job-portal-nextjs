"use client"


import store from "@/redux/store"
import { Provider } from "react-redux"

const ProviderRedux = ({children})=>{
    return <provider store={store}>{children}</provider>
}

export default ProviderRedux