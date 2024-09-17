import { LayoutSlotProps } from "@app/Layout"
import React from "react"
import Card from "../UI/Card"
import { Form, Link } from "react-router-dom"

const Center: React.FC<LayoutSlotProps> = ({ children }) => {

    return <>
        <Form method="post">
            <textarea name="content" ></textarea>
            <button type="submit">Create</button>
        </Form>
    </>

}

export default Center