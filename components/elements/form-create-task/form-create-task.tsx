import {Button, Form, FormInstance, Input, Radio, Upload} from "antd";
import {Values} from "async-validator";
import {UploadOutlined} from "@ant-design/icons";

type FormCreateTaskProps = {
    form: FormInstance<Values>,
}

export default function FormCreateTask ({form}: FormCreateTaskProps) {
    const normFile = (e: any) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };
    return (
        <Form name="addNewTask" form={form}>
            <Form.Item name="newTask" rules={[{required: true, message: "Type a new task"}]}><Input/></Form.Item>
            <Form.Item label="Tag" name="tag" rules={[{required: true, message: "Choose a tag"}]}>
                <Radio.Group>
                    <Radio.Button value="RED">Red</Radio.Button>
                    <Radio.Button value="CHOCOLATE">Orange</Radio.Button>
                    <Radio.Button value="GREEN">Green</Radio.Button>
                    <Radio.Button value="DARKCYAN">Blue</Radio.Button>
                    <Radio.Button value="PURPLE">Purple</Radio.Button>
                </Radio.Group>
            </Form.Item>
            <Form.Item
                name="upload"
                label="Upload"
                valuePropName="fileList"
                getValueFromEvent={normFile}
            >
                <Upload name="thumb" listType="picture">
                    <Button icon={<UploadOutlined/>}>Click to upload</Button>
                </Upload>
            </Form.Item>
        </Form>
    )
}