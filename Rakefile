require 'rubygems'
require 'cucumber'
require 'cucumber/rake/task'

task :default => [:specs, :features]

task :specs do
end

task :features => [:start_node, :cucumber, :stop_node]

task :start_node do
  sh "node app.js &"
end

Cucumber::Rake::Task.new(:cucumber) do |t|
  t.cucumber_opts = "features --format pretty"
end

task :stop_node do
  sh "pkill -x node"  
end

