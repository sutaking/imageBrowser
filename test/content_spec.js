describe('content TEST', function () {
    // body...
    beforeEach(module('content'));

    var $filter;
    var factorydeviceData;
    beforeEach(inject(function ($rootScope, $controller, _$filter_, $injector) {
        scope = $rootScope.$new();
        /*appContorller = $controller('appContorller', {
            $scope: scope
        });*/
        $filter = _$filter_;
        factorydeviceData = $injector.get('deviceData');
    }));

    it('bytes test 1', function () {
        console.log('start bytes test 1');
        var converBytes = $filter('bytes');        
        expect(converBytes(1024*11661234)).toEqual('11.1GB');

        console.log('bytes test 1 pass');
    });

    it('bytes test 1', function () {
        console.log('start bytes test 1');
        var converBytes = $filter('bytes');
        expect(converBytes(1024)).toEqual('1.0KB');

        console.log('bytes test 2');
    });

    it('bytes test 1', function () {
        console.log('start bytes test 1');
        var converBytes = $filter('bytes');
        expect(converBytes(null)).toEqual('-');

        console.log('bytes test 3');
    });

    it('bytes test 1', function () {
        console.log('start bytes test 1');
        var converBytes = $filter('bytes');
        expect(converBytes(0)).toEqual('0');

        console.log('bytes test 4');
    });

    it('bytes test 1', function () {
        console.log('start bytes test 1');
        var converBytes = $filter('bytes');
        expect(converBytes(1024*1024*1024)).toEqual('1.0GB');

        console.log('bytes test 4');
    });

    /*it('Can get an instance of my factory', inject(function (deviceData) {
        expect(deviceData).toBeDefined();
    }));*/
    it('device Data test', function () {
        console.log('start bytes test 1');
        var title = factorydeviceData.deviceTitle;
        expect(title).toEqual('Michelle USB');

        console.log('device Data test 5');
    });

    it('device Data test', function () {
        console.log('start bytes test 1');
        var storage = factorydeviceData.deviceStatus.storage;
        expect(storage).toEqual(1024*21341234);

        console.log('device Data test 5');
    });

    it('device Data test', function () {
        console.log('start bytes test 1');
        var used = factorydeviceData.deviceStatus.used;
        expect(storage).toEqual(1024*11661234);

        console.log('device Data test 5');
    });

    it('device Data test', function () {
        console.log('start bytes test 1');
        var deviceCategory = factorydeviceData.deviceCategory;
        expect(deviceCategory[0]).toEqual('USB driver Partition');

        console.log('device Data test 5');
    });

    it('device Data test', function () {
        console.log('start bytes test 1');
        var deviceCategory = factorydeviceData.deviceCategory;
        expect(deviceCategory[0]).toEqual('Backup Partition');

        console.log('device Data test 5');
    });

    it('textCut', function () {
        console.log('start bytes test 1');
        var textCut = $filter('textCut');
        expect(textCut('1234567899', 3)).toEqual('123...');

        console.log('textCut test 1');
    });

    it('textCut', function () {
        console.log('start bytes test 1');
        var textCut = $filter('textCut');
        expect(textCut('123', 3)).toEqual('123');

        console.log('textCut test 2');
    });

    it('textCut', function () {
        console.log('start bytes test 1');
        var textCut = $filter('textCut');
        expect(textCut('1234', 3)).toEqual('123...');

        console.log('textCut test 2');
    });

    it('textCut', function () {
        console.log('start bytes test 1');
        var textCut = $filter('textCut');
        expect(textCut('1234', 4)).toEqual('1234');

        console.log('textCut test 2');
    });

    it('textCut', function () {
        console.log('start bytes test 1');
        var textCut = $filter('textCut');
        expect(textCut('12345', 4)).toEqual('12345');

        console.log('textCut test 2');
    });

    it('textCut', function () {
        console.log('start bytes test 1');
        var textCut = $filter('textCut');
        expect(textCut('123456789012345678901234567890123456789012345678901234567890', 100)).
        toEqual('123456789012345678901234567890123456789012345678901234567890');

        console.log('textCut test 2');
    });

    /*it('textCut', function () {
        var textCut = $filter('textCut');
        expect(textCut('1970-01-01T00:19:37.000Z', 10)).toEqual('123...');
    });*/
    it('formatFile folder 1', function () {
        console.log('start bytes test 1');
        var textCut = $filter('formatFile');
        expect(textCut(null, 0)).toEqual('');

        console.log('formatFile folder test 2');

    });

    it('formatFile folder 1', function () {
        console.log('start bytes test 1');
        var textCut = $filter('formatFile');
        expect(textCut('123', 0)).toEqual('123');

        console.log('formatFile folder test 2');
    });

    it('formatFile folder type 3', function () {
        console.log('start bytes test 1');
        var textCut = $filter('formatFile');
        expect(textCut('123', 1)).toEqual('');

        console.log('formatFile folder test 2');
    });

    it('formatFile', function () {
        console.log('start bytes test 1');
        var textCut = $filter('formatFile');
        expect(textCut('123.jpg', 0)).toEqual('123');

        console.log('formatFile test 2');
    });

    it('formatFile', function () {
        console.log('start bytes test 1');
        var textCut = $filter('formatFile');
        expect(textCut('120-3.jpg', 0)).toEqual('120-3');

        console.log('formatFile test 2');
    });

    it('formatFile', function () {
        console.log('start bytes test 1');
        var textCut = $filter('formatFile');
        expect(textCut('120-.3.jpg', 0)).toEqual('120-.3');

        console.log('formatFile test 2');
    });

    it('formatFile', function () {
        console.log('start bytes test 1');
        var textCut = $filter('formatFile');
        expect(textCut('120-3.jpg', 1)).toEqual('jpg');

        console.log('formatFile test 2');
    });

    it('formatFile', function () {
        console.log('start bytes test 1');
        var textCut = $filter('formatFile');
        expect(textCut('120-3.jpg', 1)).toEqual('jpg');

        console.log('formatFile test 2');
    });

    it('formatFile', function () {
        console.log('start bytes test 1');
        var textCut = $filter('formatFile');
        expect(textCut('120-3$sdf.jpg', 1)).toEqual('JPG');

        console.log('formatFile test 2');
    });

    it('formatFile', function () {
        console.log('start bytes test 1');
        var textCut = $filter('formatFile');
        expect(textCut('120-3$sdf.JPG', 1)).toEqual('JPG');

        console.log('formatFile test 2');
    });

    it('formatFile', function () {
        console.log('start bytes test 1');
        var textCut = $filter('formatFile');
        expect(textCut('120-3$sdf.png', 1)).toEqual('PNG');

        console.log('formatFile test 2');
    });

     it('formatFile', function () {
        console.log('start bytes test 1');
        var textCut = $filter('formatFile');
        expect(textCut('120-3$sdf.PNG', 1)).toEqual('PNG');

        console.log('formatFile test 2');
    });

    it('formatFile', function () {
        console.log('start bytes test 1');
        var textCut = $filter('formatFile');
        expect(textCut('120-3$sdf.gif', 1)).toEqual('GIF');

        console.log('formatFile test 2');
    });

    it('formatFile', function () {
        console.log('start bytes test 1');
        var textCut = $filter('formatFile');
        expect(textCut('120-3@@.gif', 1)).toEqual('GIF');

        console.log('formatFile test 2');
    });


    it('formatFile', function () {
        console.log('start bytes test 1');
        var textCut = $filter('formatFile');
        expect(textCut('1!!@#20-3@@.gif', 1)).toEqual('GIF');

        console.log('formatFile test 2');
    });

    it('formatFile', function () {
        console.log('start bytes test 1');
        var textCut = $filter('formatFile');
        expect(textCut('120-3$sdf.GIF', 1)).toEqual('GIF');

        console.log('formatFile test 2');
    });

    it('formatDate', function () {
        console.log('start bytes test 1');
        var textCut = $filter('formatDate');
        expect(textCut(null)).toEqual('');

        console.log('formatDate test 2');
    });

    it('formatDate', function () {
        console.log('start bytes test 1');
        var textCut = $filter('formatDate');
        expect(textCut('Thu Dec 03 2015 10:09:52 GMT+0800 (CST)')).toEqual('Thu, 03 Dec 2015');

        console.log('formatDate test 2');
    });

    it('formatDate', function () {
        console.log('start bytes test 1');
        var textCut = $filter('formatDate');
        expect(textCut('1970-01-01TZ08:00')).toEqual('Thu, 03 Dec 2015');

        console.log('formatDate test 2');
    });

});