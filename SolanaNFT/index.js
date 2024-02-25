"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var web3_js_1 = require("@solana/web3.js");
var spl_token_1 = require("@solana/spl-token");
var quicknodeEndpoint = 'https://broken-fittest-waterfall.solana-devnet.quiknode.pro/53eb10c92c0f01f68849b41744770c92ddd31a67/';
var connection = new web3_js_1.Connection(quicknodeEndpoint, "confirmed");
var secret = [174, 157, 65, 57, 39, 160, 80, 236, 198, 199, 31, 185, 130, 28, 84, 184, 140, 245, 128, 238, 61, 70, 34, 216, 208, 3, 236, 183, 126, 187, 159, 152, 236, 239, 214, 93, 0, 245, 157, 57, 196, 125, 154, 195, 22, 21, 161, 167, 177, 95, 117, 213, 203, 40, 81, 192, 59, 211, 221, 160, 201, 4, 149, 242];
var fromWallet = web3_js_1.Keypair.fromSecretKey(new Uint8Array(secret));
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var mint, fromTokenAccount, toWallet, toTokenAccount, signature;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, spl_token_1.createMint)(connection, fromWallet, // Payer of the transaction
                fromWallet.publicKey, // Account that will control the minting 
                null, // Account that will control the freezing of the token 
                0 // Location of the decimal place 
                )];
            case 1:
                mint = _a.sent();
                return [4 /*yield*/, (0, spl_token_1.getOrCreateAssociatedTokenAccount)(connection, fromWallet, mint, fromWallet.publicKey)];
            case 2:
                fromTokenAccount = _a.sent();
                toWallet = web3_js_1.Keypair.generate();
                return [4 /*yield*/, (0, spl_token_1.getOrCreateAssociatedTokenAccount)(connection, fromWallet, mint, toWallet.publicKey)];
            case 3:
                toTokenAccount = _a.sent();
                return [4 /*yield*/, (0, spl_token_1.mintTo)(connection, fromWallet, // Payer of the transaction fees 
                    mint, // Mint for the account 
                    fromTokenAccount.address, // Address of the account to mint to 
                    fromWallet.publicKey, // Minting authority
                    1 // Amount to mint 
                    )];
            case 4:
                signature = _a.sent();
                return [4 /*yield*/, (0, spl_token_1.setAuthority)(connection, fromWallet, // Payer of the transaction fees
                    mint, // Account 
                    fromWallet.publicKey, // Current authority 
                    0, // Authority type: "0" represents Mint Tokens 
                    null // Setting the new Authority to null
                    )];
            case 5:
                _a.sent();
                return [4 /*yield*/, (0, spl_token_1.transfer)(connection, fromWallet, // Payer of the transaction fees 
                    fromTokenAccount.address, // Source account 
                    toTokenAccount.address, // Destination account 
                    fromWallet.publicKey, // Owner of the source account 
                    1 // Number of tokens to transfer 
                    )];
            case 6:
                signature = _a.sent();
                console.log("SIGNATURE", signature);
                return [2 /*return*/];
        }
    });
}); })();
