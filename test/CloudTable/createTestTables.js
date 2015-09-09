describe("Should Create All Test Tables",function(done){

    before(function(){
        this.timeout(10000);
        CB.appKey = "Qopoy/kXd+6G734HsjQMqGPGOvwEJYmBG84lQawRmWM=";
    });
   

  it("should delete tables",function(done){

        this.timeout(20000);
        var obj = new CB.CloudTable('Address');
        obj.delete().then(function(){
            done();
        },function(){
            throw "Unable to delete";
        });

    });

    it("should delete tables",function(done){

        this.timeout(20000);
        var obj = new CB.CloudTable('Company');
        obj.delete().then(function(){
            done();
        },function(){
            throw "Unable to delete";
        });

    }); 

    it("should delete tables",function(done){

        this.timeout(20000);
     
        var obj = new CB.CloudTable('Employee');
        obj.delete().then(function(){
            done();
        },function(){
            throw "Unable to delete";
        });

    });

    it("should create a table",function(done){

        this.timeout(50000);

        var Age = new CB.Column('Age');
        Age.dataType = 'Number';
        var Name = new CB.Column('Name');
        Name.dataType = 'Text';
        obj = new CB.CloudTable('Employee');
        obj.addColumn(Age);
        obj.addColumn(Name);
        obj.save().then(function(res){
            console.log(res);
            done();
        },function(){
            throw "Unable to Create Table";
        });
    });

    it("should create a table",function(done){

        this.timeout(50000);

        var obj = new CB.CloudTable('Company');
        var Revenue = new CB.Column('Revenue');
        Revenue.dataType = 'Number';
        var Name = new CB.Column('Name');
        Name.dataType = 'Text';
        obj.addColumn(Revenue);
        obj.addColumn(Name);
        obj.save().then(function(res){
            console.log(res);
            done();
        },function(){
            throw "Unable to Create Table";
        });
    });

    it("should create a table",function(done){

        this.timeout(50000);

        var obj = new CB.CloudTable('Address');
        var City = new CB.Column('City');
        City.dataType = 'Text';
        var PinCode = new CB.Column('PinCode');
        PinCode.dataType = 'Number';
        obj.addColumn(City);
        obj.addColumn(PinCode);
        obj.save().then(function(res){
            console.log(res);
            done();
        },function(){
            throw "Unable to Create Table";
        });
    });

    it("Should update the table schema",function(done){

        this.timeout(50000);

        var obj = new CB.CloudTable('Employee');
        CB.CloudTable.get(obj).then(function(res){
            var Company = new CB.Column('Company');
            Company.dataType = 'Relation';
            Company.relatedTo = 'Company';
            res.addColumn(Company);
            var Address = new CB.Column('Address');
            Address.dataType = 'Relation';
            Address.relatedTo = 'Address';
            res.addColumn(Address);
            res.save().then(function(res){
                console.log(res);
                done();
            },function(err){
                throw "Unable to Update schema of the table";
            })
        },function(){
            throw "Unable to get table";
        });
    });

    it("Should update the table schema",function(done){

        this.timeout(40000);

        var obj = new CB.CloudTable('Company');
        CB.CloudTable.get(obj).then(function(res){
            var Employee = new CB.Column('Employee');
            Employee.dataType = 'List';
            Employee.relatedTo = 'Employee';
            res.addColumn(Employee);
            var Address = new CB.Column('Address');
            Address.dataType = 'Relation';
            Address.relatedTo = 'Address';
            res.addColumn(Address);
            res.save().then(function(res){
                console.log(res);
                done();
            },function(err){
                throw "Unable to Update schema of the table";
            })
        },function(){
            throw "Unable to get table";
        });
    });



    it("should create table student4",function(done){

        this.timeout(50000);
        var callback = {};
        callback.success = function(res){
            var student = new CB.CloudTable('student4');
            var subject = new CB.Column('subject');
            subject.dataType = 'List';
            subject.relatedTo = 'Text';
            var age = new CB.Column('age');
            age.dataType = 'Number';
            student.addColumn(subject);
            student.addColumn(age);
            student.save().then(function(res){
                done();
            },function(){
                throw "Unable to create Student";
            });
        };
        callback.error = function(){
            throw "Unable to Delete";
        };
        var obj = new CB.CloudTable('student4');
        obj.delete(callback);
    });


    it("should create table Role",function(done){

        this.timeout(50000);

        var callback = {};
        callback.success = function(res){
            var user = new CB.CloudTable('Role');
            user.save().then(function(res){
                done();
            },function(){
                throw "Unable to create Role";
            });
        };
        callback.error = function(){
            throw "Unable to Delete";
        };
        var obj = new CB.CloudTable('Role');
        obj.delete(callback);
    });


    it("should create table user",function(done){

        this.timeout(50000);

        var callback = {};
        callback.success = function(res){
            var user = new CB.CloudTable('User');
            user.save().then(function(res){
                done();
            },function(){
                throw "Unable to create user";
            });
        };
        callback.error = function(){
            throw "Unable to Delete";
        };
        var obj = new CB.CloudTable('User');
        obj.delete(callback);
    });

  it("should create table Custom",function(done){

        this.timeout(50000);


        var callback = {};
        callback.success = function(res){
            var custom = new CB.CloudTable('Custom');
            var newColumn = new CB.Column('newColumn');
            newColumn.dataType = 'Email';
            custom.addColumn(newColumn);
            var newColumn1 = new CB.Column('newColumn1');
            newColumn1.dataType = 'Text';
            custom.addColumn(newColumn1);
            var newColumn2 = new CB.Column('newColumn2');
            newColumn2.dataType = 'URL';
            custom.addColumn(newColumn2);
            var newColumn3 = new CB.Column('newColumn3');
            newColumn3.dataType = 'Number';
            custom.addColumn(newColumn3);
            var newColumn4 = new CB.Column('newColumn4');
            newColumn4.dataType = 'Boolean';
            custom.addColumn(newColumn4);
            var newColumn5 = new CB.Column('newColumn5');
            newColumn5.dataType = 'DateTime';
            custom.addColumn(newColumn5);
            var newColumn6 = new CB.Column('newColumn6');
            newColumn6.dataType = 'Object';
            custom.addColumn(newColumn6);
            custom.save().then(function(res){
                done();
            },function(){
                throw "Unable to create user";
            });
        };
        callback.error = function(){
            throw "Unable to Delete";
        };
        var obj = new CB.CloudTable('Custom');
        obj.delete(callback);
    });

    it("should update custom table ",function(done){

        this.timeout(50000);

        var custom = new CB.CloudTable('Custom');
        CB.CloudTable.get(custom).then(function(custom){
            var newColumn7 = new CB.Column('newColumn7');
            newColumn7.dataType = 'List';
            newColumn7.relatedTo = 'Custom';
            custom.addColumn(newColumn7);
            custom.save().then(function(res){
                done();
            },function(){
                throw "Unable to create user";
            });
        },function(){
           throw "Unable to get Table";
        });
    });

    it("should create table Custom5",function(done){

        this.timeout(50000);

        var callback = {};
        callback.success = function(res){
            var custom = new CB.CloudTable('Custom5');
            var newColumn = new CB.Column('location');
            newColumn.dataType = 'GeoPoint';
            custom.addColumn(newColumn);
            custom.save().then(function(res){
                done();
            },function(){
                throw "Unable to create Custom5";
            });
        };
        callback.error = function(){
            throw "Unable to Delete";
        };
        var obj = new CB.CloudTable('Custom5');
        obj.delete(callback);
    });


    it("should create table Sample",function(done){

        this.timeout(50000);


        var callback = {};
        callback.success = function(res){
            var custom = new CB.CloudTable('Sample');
            var newColumn = new CB.Column('name');
            newColumn.dataType = 'Text';
            newColumn.required = true;
            custom.addColumn(newColumn);
            var newColumn1 = new CB.Column('unique');
            newColumn1.dataType = 'Text';
            newColumn1.unique = true;
            custom.addColumn(newColumn1);
            var newColumn2 = new CB.Column('stringArray');
            newColumn2.dataType = 'List';
            newColumn2.relatedTo = 'Text';
            custom.addColumn(newColumn2);
            var newColumn3 = new CB.Column('objectArray');
            newColumn3.dataType = 'List';
            newColumn3.relatedTo = 'Object';
            custom.addColumn(newColumn3);
            var newColumn6 = new CB.Column('file');
            newColumn6.dataType = 'File';
            custom.addColumn(newColumn6);
            var newColumn7 = new CB.Column('fileList');
            newColumn7.dataType = 'List';
            newColumn7.relatedTo = 'File';
            custom.addColumn(newColumn7);
            custom.save().then(function(res){
                done();
            },function(){
                throw "Unable to create Sample";
            });
        };
        callback.error = function(){
            throw "Unable to Delete";
        };
        var obj = new CB.CloudTable('Sample');
        obj.delete(callback);


    });


    it("should update Sample table ",function(done){

        this.timeout(50000);

        var custom = new CB.CloudTable('Sample');
        CB.CloudTable.get(custom).then(function(custom){
            var newColumn = new CB.Column('uniqueRelation');
            newColumn.dataType = 'Relation';
            newColumn.relatedTo = 'Sample';
            newColumn.unique = true;
            custom.addColumn(newColumn);
            var newColumn4 = new CB.Column('sameRelation');
            newColumn4.dataType = 'Relation';
            newColumn4.relatedTo = 'Sample';
            custom.addColumn(newColumn4);
            var newColumn5 = new CB.Column('relationArray');
            newColumn5.dataType = 'List';
            newColumn5.relatedTo = 'Sample';
            custom.addColumn(newColumn5);
            custom.save().then(function(res){
                done();
            },function(){
                throw "Unable to Update Sample";
            });
        },function(){
            throw "Unable to get Table";
        });
    });


    it("should create table hostel",function(done){

        this.timeout(50000);

        var callback = {};
        callback.success = function(res){
            var custom = new CB.CloudTable('hostel');
            var newColumn = new CB.Column('room');
            newColumn.dataType = 'Number';
            custom.addColumn(newColumn);
            var newColumn1 = new CB.Column('name');
            newColumn1.dataType = 'Text';
            custom.addColumn(newColumn1);
            custom.save().then(function(res){
                done();
            },function(){
                throw "Unable to create hostel";
            });
        };
        callback.error = function(){
            throw "Unable to Delete";
        };
        var obj = new CB.CloudTable('hostel');
        obj.delete(callback);


    });

    //create Hostel
    it("should create table student1",function(done){

        this.timeout(50000);

        var callback = {};
        callback.success = function(res){
            var custom = new CB.CloudTable('student1');
            var newColumn = new CB.Column('age');
            newColumn.dataType = 'Number';
            custom.addColumn(newColumn);
            var newColumn2 = new CB.Column('newColumn');
            newColumn2.dataType = 'Relation';
            newColumn2.relatedTo = 'hostel';
            custom.addColumn(newColumn2);
            var newColumn3 = new CB.Column('name');
            newColumn3.dataType = 'Text';
            custom.addColumn(newColumn3);
            custom.save().then(function(res){
                done();
            },function(){
                throw "Unable to create Sample";
            });
        };
        callback.error = function(){
            throw "Unable to Delete";
        };
        var obj = new CB.CloudTable('student1');
        obj.delete(callback);
    });

    it("should create table Student",function(done){

        this.timeout(50000);


        var callback = {};
        callback.success = function(res){
            var custom = new CB.CloudTable('Student');
            var newColumn = new CB.Column('name');
            newColumn.dataType = 'Text';
            custom.addColumn(newColumn);
            var newColumn1 = new CB.Column('age');
            newColumn1.dataType = 'Number';
            custom.addColumn(newColumn1);
            var newColumn2 = new CB.Column('class');
            newColumn2.dataType = 'Text';
            custom.addColumn(newColumn2);
            var newColumn3 = new CB.Column('description');
            newColumn3.dataType = 'Text';
            custom.addColumn(newColumn3);
            custom.save().then(function(res){
                done();
            },function(){
                throw "Unable to create Student";
            });
        };
        callback.error = function(){
            throw "Unable to Delete";
        };
        var obj = new CB.CloudTable('Student');
        obj.delete(callback);

    });

    it("should create table Custom18",function(done){

        this.timeout(50000);

        var callback = {};
        callback.success = function(res){
            var custom = new CB.CloudTable('Custom18');
            var newColumn = new CB.Column('number');
            newColumn.dataType = 'Number';
            custom.addColumn(newColumn);
            custom.save().then(function(res){
                done();
            },function(){
                throw "Unable to create Custom18";
            });
        };
        callback.error = function(){
            throw "Unable to Delete";
        };
        var obj = new CB.CloudTable('Custom18');
        obj.delete(callback);

    });

    it("should create table Custom3",function(done){

        this.timeout(50000);

        var callback = {};
        callback.success = function(res){
            var custom = new CB.CloudTable('Custom3');
            var newColumn = new CB.Column('address');
            newColumn.dataType = 'Text';
            custom.addColumn(newColumn);
            custom.save().then(function(res){
                done();
            },function(){
                throw "Unable to create Custom3";
            });
        };
        callback.error = function(){
            throw "Unable to Delete";
        };
        var obj = new CB.CloudTable('Custom3');
        obj.delete(callback);


    });

    it("should create table Custom7",function(done){

        this.timeout(50000);

        var callback = {};
        callback.success = function(res){
            var custom = new CB.CloudTable('Custom7');
            var newColumn = new CB.Column('requiredNumber');
            newColumn.dataType = 'Number';
            custom.addColumn(newColumn);
            custom.save().then(function(res){
                done();
            },function(){
                throw "Unable to create Custom7";
            });
        };
        callback.error = function(){
            throw "Unable to Delete";
        };
        var obj = new CB.CloudTable('Custom7');
        obj.delete(callback);
    });

    it("should create table Custom2",function(done){

        this.timeout(50000);

        var callback = {};
        callback.success = function(res){
            var custom = new CB.CloudTable('Custom2');
            var newColumn = new CB.Column('newColumn1');
            newColumn.dataType = 'Text';
            custom.addColumn(newColumn);
            var newColumn1 = new CB.Column('newColumn7');
            newColumn1.dataType = 'Relation';
            newColumn1.relatedTo = 'student1';
            custom.addColumn(newColumn1);
            var newColumn2 = new CB.Column('newColumn2');
            newColumn2.dataType = 'Relation';
            newColumn2.relatedTo = 'Custom3';
            custom.addColumn(newColumn2);
            custom.save().then(function(res){
                done();
            },function(){
                throw "Unable to create Custom2";
            });
        };
        callback.error = function(){
            throw "Unable to Delete";
        };
        var obj = new CB.CloudTable('Custom2');
        obj.delete(callback);
    });

    it("should create table Custom4",function(done){

        this.timeout(50000);


        var callback = {};
        callback.success = function(res){
            var custom = new CB.CloudTable('Custom4');
            var newColumn = new CB.Column('newColumn1');
            newColumn.dataType = 'Text';
            custom.addColumn(newColumn);
            var newColumn1 = new CB.Column('newColumn7');
            newColumn1.dataType = 'List';
            newColumn1.relatedTo = 'student1';
            custom.addColumn(newColumn1);
            custom.save().then(function(res){
                done();
            },function(){
                throw "Unable to create Custom4";
            });
        };
        callback.error = function(){
            throw "Unable to Delete";
        };
        var obj = new CB.CloudTable('Custom4');
        obj.delete(callback);


    });


    it("should create table Custom14",function(done){

        this.timeout(50000);


        var callback = {};
        callback.success = function(res){
            var custom = new CB.CloudTable('Custom14');
            var newColumn = new CB.Column('List_Number');
            newColumn.dataType = 'List';
            newColumn.relatedTo = 'Number';
            custom.addColumn(newColumn);
            var newColumn1 = new CB.Column('List_GeoPoint');
            newColumn1.dataType = 'List';
            newColumn1.relatedTo = 'GeoPoint';
            custom.addColumn(newColumn1);
            custom.save().then(function(res){
                done();
            },function(){
                throw "Unable to create Custom14";
            });
        };
        callback.error = function(){
            throw "Unable to Delete";
        };
        var obj = new CB.CloudTable('Custom14');
        obj.delete(callback);


    });

   it("should create table Custom1",function(done){

        this.timeout(50000);


        var callback = {};
        callback.success = function(res){
            var custom = new CB.CloudTable('Custom1');
            var newColumn = new CB.Column('description');
            newColumn.dataType = 'Text';
            custom.addColumn(newColumn);
            var newColumn1 = new CB.Column('newColumn');
            newColumn1.dataType = 'Text';
            custom.addColumn(newColumn1);
            var newColumn2 = new CB.Column('newColumn1');
            newColumn2.dataType = 'Boolean';
            custom.addColumn(newColumn2);
            
            custom.save().then(function(res){
                done();
            },function(){
                throw "Unable to create Custom1";
            });
        };
        callback.error = function(){
            throw "Unable to Delete";
        };
        var obj = new CB.CloudTable('Custom1');
        obj.delete(callback);


    });

    after(function() {
        CB.appKey = "9SPxp6D3OPWvxj0asw5ryA==";
    });

});