export class Term_TextList {
  makeList(array: any[], propertyName: string) {
    let lista: any[] = [];
    array.forEach((data) => {
      lista.push(data[propertyName]);
    });
    return lista;
  }
}
