import { Component, OnInit } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { MessageBus } from '../../services/message-bus.service';
import { ProductDetailsService } from '../../services/product-details.service';

@Component({
    selector: 'item-scanner',
    templateUrl: 'item-scanner.component.html'
})
export class ItemScannerComponent implements OnInit {
    results: any;
    options: BarcodeScannerOptions;

    constructor(private barcodeScanner: BarcodeScanner, private messageBus: MessageBus, private productDetailsService: ProductDetailsService) {
    }

    ngOnInit() { }

    async scanBarcode() {
        this.results = await this.barcodeScanner.scan();
        this.productDetailsService.getProductDetails(this.results.text).subscribe(
            (response: any) => {
                this.messageBus.emit({
                    command: 'addItemToCart', data: {
                        name: response.name,
                        packaging: response.packaging,
                        price: response.price,
                        quantity: 1
                    }
                });
            }
        );
    }

    fakeBarcodeScan() {
        console.log("fakeBarcodeScan");
        this.productDetailsService.getProductDetails('0012345678905').subscribe(
            (response: any) => {
                this.messageBus.emit({
                    command: 'addItemToCart', data: {
                        name: response.name,
                        packaging: response.packaging,
                        price: parseFloat(response.price),
                        quantity: 1
                    }
                });
            }
        );
    }
}
