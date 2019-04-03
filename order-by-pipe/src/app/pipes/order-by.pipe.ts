import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(values: number[]|string[]|object[], key?: string, reverse?: boolean): number[]|string[]|object[] {
    if (!Array.isArray(values) || values.length <= 0) {
      return null;
    }
    return this.sort(values, key, reverse);
  }

  private sort(value: any[], key?: any, reverse?: boolean): any[] {
    const isInside = key && key.indexOf('.') !== -1;
    if (isInside) {
      key = key.split('.');
    }

    const sortedData = value.sort((firstValue: any, secondValue: any): number => {
      if (!key) {
        return firstValue > secondValue ? 1 : -1;
      }

      if (!isInside) {
        return firstValue[key] > secondValue[key] ? 1 : -1;
      }

      return this.findValueFromObject(firstValue, key) > this.findValueFromObject(secondValue, key) ? 1 : -1;
    });

    if (reverse) {
      return sortedData.reverse();
    }

    return sortedData;
  }

  private findValueFromObject(valueObject: any, keys: string[]) {
    for (let index = 0; index < keys.length; index++) {
      const key = keys[index];
      if (!(key in valueObject)) {
        return;
      }
      valueObject = valueObject[key];
    }
    return valueObject;
  }

}
