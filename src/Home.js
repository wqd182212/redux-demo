import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store/index';

function Home() {
    const [state] = useState(store.getState());
    return (
        <div>
            <div>
                <Input
                    placeholder={state.inputValue}
                    style={{ width: 160, margin: 10 }}>
                </Input>
                <Button type="primary">add</Button>
            </div>
            <div>
                <List
                    bordered
                    style={{ width: 160, marginLeft: 10 }}
                    dataSource={state.list}
                    renderItem={item => (
                        <List.Item>{item}</List.Item>
                    )}>
                </List>
            </div>
        </div>
    );
}

export default Home;