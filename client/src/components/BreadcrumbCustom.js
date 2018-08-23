import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const BreadcrumbCustom = (props) => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
        <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
        <BreadcrumbItem><a href="#">Data</a></BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbCustom;
