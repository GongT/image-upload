import {createConnection, Model, Schema, SchemaOptions, Document} from "mongoose";
import {ObjectSchema} from "./base";
import {MyDocument} from "../public-define";

const db = createConnection(JsonEnv.upload.database);
console.log('database url: %s', JsonEnv.upload.database);

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
	console.log("Succeed to connect mongo!")
});
export const database = db;

export abstract class DataModel <IDocType extends MyDocument> {
	private _name: string;
	private _model: Model<IDocType & Document>;
	private _schema: Schema;
	
	protected abstract getSchema(): ObjectSchema;
	
	protected getTableName() {
		return this.getModelName();
	}
	
	protected getModelName() {
		return getTableName(this.constructor['name']);
	}
	
	constructor() {
		this._name = this.getTableName();
		this._schema = new Schema(this.getSchema(), <SchemaOptions> {
			collection: this._name,
			minimize: false,
			typeKey: 'type',
			timestamps: {
				createdAt: 'createdAt',
				updatedAt: 'updatedAt',
			},
		});
		
		this._model = db.model<IDocType & Document>(this.getModelName(), this._schema);
	}
	
	create(): IDocType & Document {
		return new this._model;
	}
	
	get name() {
		return this._name;
	}
	
	get model(): Model<IDocType & Document> {
		return this._model;
	}
	
	get schema() {
		return this._schema;
	}
}

function getTableName(name: string) {
	return name;
}
