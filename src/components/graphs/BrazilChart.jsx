import React, { useEffect, useState } from "react";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Container } from "react-bootstrap";
require('highcharts/modules/map')(Highcharts);

export default function BrazilChart({data}) {
  const [mapedData, setMappedData] = useState();
  const [topology, setTopologyData] = useState();
  
  useEffect(() => {
    async function getTopology() {
      let topo = await fetch(
        'https://code.highcharts.com/mapdata/countries/br/br-all.topo.json'
    ).then(response => response.json());
    setTopologyData(topo);
    } 
    getTopology();
  }, []);

  useEffect(() => {
    var mappedData = [];
    for (var i = 0; i < data?.length; i++) {
      let estado = data[i];
      let dado = [`br-${estado?.estados?.toLowerCase()}`, estado?.usuarios_totais];
      mappedData.push(dado);
    }
    setMappedData(mappedData);
  }, [data]);

  const mapOptions = {
    chart: {
      map: topology
    },
    title: {
      text: ''
    },  
    tooltip: {
      headerFormat: '',
      pointFormat: '<b>{point.name}</b><br>{point.value} usuários'
    },
    colorAxis: {
      min: 5000,
      max: 200000,
      stops: [
        [0.0,'#FFFFFF'],
        [0.5,'#A3A3A3'],
        [0.7, '#707070'],
        [0.8, '#D2202C'],
        [0.9, '#bb1d27'],
        [1, '#2F2E41'],

      ]
    },
    series: [
      {
        enableMouseTracking: true,
      },
      {
        mapData: topology,
        name: 'Brasil',
        data: mapedData,
      }
    ]
  };

  return (
    <div>
        <HighchartsReact
          options={mapOptions}
          constructorType={'mapChart'}
          highcharts={Highcharts}
        />
        <Container className="graph-caption-bar">
        </Container>
        <div className="caption-data">
            <p className="range-legend">0</p>
            <p className="range-legend">10000</p>
            <p className="range-legend">100000</p>
            <p className="range-legend">150000</p>
            <p className="range-legend">200000</p>
        </div>
    </div>
  )
}