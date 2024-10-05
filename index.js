 async function indexData(data) {
    try {
      const response = await client.index({
        index: 'muthu',   
        body: data,
      });
      console.log(`Data indexed successfully: ${response}`);
    } catch (error) {
      console.error(`Error indexing data into muthu:`, error);
    }
  }
  
  async function getEmpCount() {
    try {
      const response = await client.count({
        index: 'muthu',   
      });
      console.log(`Employee count: ${response.count}`);
    } catch (error) {
      console.error(`Error fetching employee count for muthu:`, error);
    }
  }
  
  async function delEmpById(empId) {
    try {
      const response = await client.delete({
        index: 'muthu',   
        id: empId,
      });
      console.log(`Employee ${empId} deleted successfully`);
    } catch (error) {
      console.error(`Error deleting employee ${empId} from muthu:`, error);
    }
  }
  
  async function searchByColumn(column, value) {
    try {
      const response = await client.search({
        index: 'muthu',   
        body: {
          query: {
            match: { [column]: value },
          },
        },
      });
      console.log(`Search results: ${JSON.stringify(response.hits.hits)}`);
    } catch (error) {
      console.error(`Error searching by column ${column} in muthu:`, error);
    }
  }
  
  async function getDepFacet() {
    try {
      const response = await client.search({
        index: 'muthu',   
        body: {
          aggs: {
            department_count: {
              terms: { field: 'Department.keyword' },
            },
          },
        },
      });
      console.log(`Department facet: ${JSON.stringify(response.aggregations)}`);
    } catch (error) {
      console.error(`Error getting department facet for muthu:`, error);
    }
  }
  
  
  indexData({ name: 'John Doe', Department: 'IT' });
  getEmpCount();
  delEmpById('E02003');
  searchByColumn('Department', 'IT');
  getDepFacet();
  
