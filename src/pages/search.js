import * as React from "react"
import { Button } from 'antd';
import { Row} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { InputNumber } from 'antd';
import { navigate } from "gatsby"


let inputValue = 1;

function onChange(value) {
    inputValue = value;
    console.log('changed', value);
}

export default function Search() {
  return <div>
  <Row>
        <InputNumber placeholder="搜索区块号 区块哈希  交易" defaultValue={1} onChange={onChange} />
        <Button icon={<SearchOutlined />} onClick={e => {console.log("hehe", inputValue);
        if (0 === inputValue ) {
            navigate('/tx-detail' + '?hash=' + String(inputValue));
        } 
        else {
            navigate('/blockdetail' + '?blocknumber=' + inputValue);
        }

            }}>搜索</Button>（输入0查询交易页面，其他为查询区块）
      </Row>
    </div>
}