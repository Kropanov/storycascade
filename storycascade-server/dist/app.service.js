"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    getHello() {
        return [
            {
                title: 'Second World',
                subtitle: 'Games',
                src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
            },
            {
                title: 'Let Me Game in Peace',
                subtitle: 'Urban',
                src: 'https://cdn.vuetifyjs.com/images/cards/three.jpg',
            },
            {
                title: 'My Goalkeeping System',
                subtitle: 'Sports',
                src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
            },
            {
                title: 'Rise of the Horde',
                subtitle: 'War',
                src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
            },
            {
                title: 'Joy of Life',
                subtitle: 'History',
                src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
            },
            {
                title: 'Plague Doctor',
                subtitle: 'Horror',
                src: 'https://cdn.vuetifyjs.com/images/cards/forest.jpg',
            },
        ];
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map