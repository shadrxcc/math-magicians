import Operate from "./operate";

const isNumber = (item) => {
  return !!item.match(/[0-9]+/);
};

const  Calculate = (obj, buttonName) => {
  if (buttonName === 'AC') {
    return {
      total: 0,
      next: null,
      operation: null,
    };
  };
  
  if (isNumber(buttonName)) {
    if (buttonName === '0' && obj.next === '0') {
      return {};
    };
    
    if (obj.operation) {
      if (obj.next) {
        return { next: obj.next + buttonName };
      };
      return { next: buttonName };
    };
    
    if (obj.next) {
      return {
        next: obj.next + buttonName,
        total: null,
      };
    };
    
    return {
      next: buttonName,
      total: null,
    };
  };
  
  if (buttonName === '.') {
    if (obj.next) {
      if (obj.next.includes('.')) {
        return {};
      };
      return { next: `${obj.next}.` };
    };
    
    if (obj.operation) {
      return { next: '0.' };
    };
    
    if (obj.total) {
      if (obj.total.includes('.')) {
        return {};
      };
      return { total: `${obj.total}.` };
    };
    return { total: '0.' };
  };
  
  if (buttonName === '=') {
    if (obj.next && obj.operation) {
      try {
        return {
          total: Operate(obj.total, obj.next, obj.operation),
          next: null,
          operation: null,
        };
      } catch {
        return {
          total: 'Unknown operation',
          next: null,
          operation: null,
        };
      };
    };
    return {};
  };
  if (buttonName === '+/-') {
    if (obj.next) {
      return { next: (-1 * parseFloat(obj.next)).toString() };
    }
    
    if (obj.total) {
      return { total: (-1 * parseFloat(obj.total)).toString() };
    }
    
    return {};
  };
  
  if (obj.operation) {
    try {
      return {
        total: Operate(obj.total, obj.next, obj.operation),
        next: null,
        operation: buttonName,
      };
    } catch {
      return {
        total: obj.total,
        next: null,
        operation: buttonName,
      };
    };
  };

  if (!obj.next) {
    return { operation: buttonName };
  };
  return {
    total: obj.next,
    next: null,
    operation: buttonName
  };
};

export default Calculate;