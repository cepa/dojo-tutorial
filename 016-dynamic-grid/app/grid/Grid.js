define([
    'dojo/_base/declare',
    'dojox/grid/EnhancedGrid'
], function (declare, EnhancedGrid) {
    return declare('app.grid.Grid', [EnhancedGrid], {
       
        structure: [[
            {
                name:  'First name',
                field: 'first_name',
                width: '200px'
            },
            {
                name:  'Last name',
                field: 'last_name',
                width: '200px'
            },
            {
                name:  'Email',
                field: 'email_address',
                width: '350px'
            },
            {
                name:  'Age',
                field: 'age',
                width: '80px'
            }
        ]]
        
    });
});
