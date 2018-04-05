import React from 'react';
import { Card, CardBody } from 'reactstrap';
// Code source credit: Nat's lecture notes with modifications by Evan Welsh

export default function Task(params) {
  let task = params.task;
  return <Card>
    <CardBody>
      <div>
        <p>Task: { task.title }</p>
        <p>Task Assigned to <b>{ task.user.name }</b></p>
        <p>Description: { task.description }</p>
        <p>Time Spent: { task.time } minutes</p>
        <p>Completed: { task.completed }</p>
      </div>
    </CardBody>
  </Card>;
}