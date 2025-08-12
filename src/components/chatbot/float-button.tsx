import React, { useState } from 'react';
import { FloatButton, Drawer, ConfigProvider } from 'antd';
import { MessageOutlined } from '@ant-design/icons';
import ChatHeader from './chat-header';

const ChatFloatButton = () => {
    const [visible, setVisible] = useState(false);

    const toggleDrawer = () => {
        setVisible(!visible);
    };

    return (
        <>
            <ConfigProvider>
                <FloatButton
                    icon={<MessageOutlined />}
                    type="primary"
                    onClick={toggleDrawer}
                    style={{ right: 24, bottom: 24 }}
                />
                <Drawer
                    title={<ChatHeader />}
                    placement="right"
                    onClose={toggleDrawer}
                    visible={visible}
                >
                </Drawer>
            </ConfigProvider>
        </>
    );
};

export default ChatFloatButton;