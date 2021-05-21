import * as React from "react"
import { Table, Row } from 'antd';
import { useStaticQuery, graphql } from "gatsby"

const columns = [
  {
    title: '区块高度',
    dataIndex: 'number',
    key: 'number',
  },
  {
    title: '方法',
    dataIndex: 'method',
    key: 'method',
  },
  {
    title: '时间',
    dataIndex: 'timestamp',
    key: 'timestamp',
  },
];


export default function RealtimeTxs() {
    //高度，交易数 时间
    const data = useStaticQuery(graphql`
    query HeaderQueryTx {
        swapi {
            extrinsics(first: 5, orderBy: TIMESTAMP_DESC) {
                nodes {
                    block {
                        number
                    }
                    method
                    timestamp
                    blockId
                }
            }
        }
    }
    `)
  //console.log("####data is ####", data, JSON.stringify(data));
    let dataSource = [];
    
    const tempArray = []
    data.swapi.extrinsics.nodes.forEach(item => {
        tempArray.push({
                number: item.block.number, 
                method: item.method,
                timestamp: item.timestamp, 
            });
    });
    dataSource = tempArray
    

  return <div>
  <Row> 
  <h3>最新交易   获取全部交易</h3>
  </Row>
  <Table dataSource={dataSource} columns={columns} pagination={{ position: [ 'none'] }}/> 
  </div>
}