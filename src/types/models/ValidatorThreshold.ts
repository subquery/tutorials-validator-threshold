// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';


export class ValidatorThreshold implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public startBlock: number;

    public timestamp: Date;

    public validatorWithLeastBond?: string;

    public leastStaked?: bigint;

    public totalStaked?: bigint;

    public maxNominatorRewardedPerValidator?: number;

    public totalValidators?: number;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save ValidatorThreshold entity without an ID");
        await store.set('ValidatorThreshold', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove ValidatorThreshold entity without an ID");
        await store.remove('ValidatorThreshold', id.toString());
    }

    static async get(id:string): Promise<ValidatorThreshold | undefined>{
        assert((id !== null && id !== undefined), "Cannot get ValidatorThreshold entity without an ID");
        const record = await store.get('ValidatorThreshold', id.toString());
        if (record){
            return ValidatorThreshold.create(record);
        }else{
            return;
        }
    }



    static create(record: Partial<Omit<ValidatorThreshold, FunctionPropertyNames<ValidatorThreshold>>> & Entity): ValidatorThreshold {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new ValidatorThreshold(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
