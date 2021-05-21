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
    title: '交易数',
    dataIndex: 'totalCount',
    key: 'totalCount',
  },
  {
    title: '时间',
    dataIndex: 'timestamp',
    key: 'timestamp',
  },
];


export default function RealtimeBlocks() {

    //高度，交易数 时间
    const data = useStaticQuery(graphql`
    query HeaderQueryBlock {
        swapi {
            blocks(first: 5, orderBy: NUMBER_DESC) {
            nodes {
                id
                number
                timestamp
                extrinsics {
                    totalCount
                }
            }
            }
        }
    }
    `)
  //console.log("####data is ####", data, JSON.stringify(data));

    let newData=[];
    let dataSource=[];

    newData = data.swapi.blocks.nodes;
  
    const tempArray = []
    newData.forEach(item => {
        tempArray.push({
                number: item.number, 
                timestamp: item.timestamp, 
                totalCount: item.extrinsics.totalCount
            });
    });
    dataSource = tempArray;


  return <div>
  <Row> 
  <h3>最新区块   获取全部区块</h3>
  </Row>
  <Table dataSource={dataSource} columns={columns} pagination={{ position: [ 'none'] }}/> 
  </div>
}