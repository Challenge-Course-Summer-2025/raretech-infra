import * as cdk from 'aws-cdk-lib';
import * as ecr from "aws-cdk-lib/aws-ecr";
import { Construct } from 'constructs';

export class CdkErcStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // 1つ目のECRリポジトリ
    const repo1 = new ecr.Repository(this, 'Repository1', {
      repositoryName: "test-repo-1",
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteImages: true
    });

    // 2つ目のECRリポジトリ
    const repo2 = new ecr.Repository(this, 'Repository2', {
      repositoryName: "test-repo-2",
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteImages: true
    });
  }
}
