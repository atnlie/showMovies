import RowData from './RowData';

class ListMovies extends React.Component {
  
  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <RowData {...rowData} />}
      />
    );
  }
}

export default ListMovies;