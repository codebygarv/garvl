// components/DraggableTask.js
import React from 'react';
import { useDrag } from 'react-dnd';

const DraggableTask = ({ task, onDragStart }) => {
  const [, drag] = useDrag({
    type: 'TASK',
    item: { task },
    options: {
      dropEffect: 'copy',
    },
    begin: onDragStart,
  });

  return (
    <div ref={drag} className="draggable-task">
      <p>{task.title}</p>
    </div>
  );
};

export default DraggableTask;