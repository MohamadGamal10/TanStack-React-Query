import { Form } from "react-bootstrap"
import { PostStatusType } from "../types";
import React from "react";

interface PostFilterProps {
    selectedPostStatus: PostStatusType;
    setSelectedPostStatus: (value: PostStatusType) => void;
}

const PostFilter = ({ selectedPostStatus, setSelectedPostStatus }: PostFilterProps) => {
    return (
        <><h5>Filter By Status</h5>
            <Form.Select value={selectedPostStatus}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedPostStatus(e.target.value as PostStatusType)}>
                <option value="all">Select Status</option>
                <option value="published">Publish</option>
                <option value="draft">Draft</option>
                <option value="block">Blocked</option>
            </Form.Select></>
    )
}

export default PostFilter
